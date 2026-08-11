const sharp = require('sharp');
const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE = 'https://pub-b09a677af6a84e489708bae5457ea79b.r2.dev/';
const OUT = 'E:/projects/Next/empire-tech-global/optimized-images';

const FILES = [
  'hero/hero-industrial-dusk.jpg', 'hero/hero-mobile.jpg', 'hero/hero-alt-warehouse.jpg',
  'sectors/sector-factory.jpg', 'sectors/sector-warehouse.jpg', 'sectors/sector-school.jpg',
  'sectors/sector-collage.jpg', 'sectors/sector-hospital.jpg', 'sectors/sector-township.jpg',
  'about/about-site-visit.jpg', 'about/about-jaipur-context.jpg',
  'capabilities/cap-architectural-drawings.jpg', 'capabilities/cap-structural-engineering.jpg',
  'capabilities/cap-cost-estimation.jpg', 'capabilities/cap-material-sourcing.jpg',
  'process/process-bg.jpg', 'process/process-handover.jpg',
  'why/why-one-team.jpg', 'why/why-compliance.jpg',
  'safety/safety-ppe.jpg', 'safety/safety-inspection.jpg', 'safety/safety-training.jpg',
  'team/team-engineers.jpg', 'team/team-site-office.jpg', 'team/avatar-placeholder.png',
  'cta/cta-lets-build.jpg', 'cta/contact-office-exterior.jpg',
  'textures/texture-navy-concrete.jpg', 'textures/texture-blueprint-grid.png',
  'meta/og-image.jpg', 'meta/404-blueprint.jpg',
];

const get = (u) =>
  new Promise((res, rej) =>
    https.get(u, (s) => {
      const c = [];
      s.on('data', (d) => c.push(d));
      s.on('end', () => res(Buffer.concat(c)));
    }).on('error', rej)
  );

(async () => {
  let before = 0, after = 0;
  console.log('file'.padEnd(46) + 'before'.padStart(9) + 'after'.padStart(9) + 'saved'.padStart(8));
  console.log('-'.repeat(72));

  for (const f of FILES) {
    const buf = await get(BASE + f);
    const dest = path.join(OUT, f);
    fs.mkdirSync(path.dirname(dest), { recursive: true });

    const meta = await sharp(buf).metadata();
    let out;

    if (f.endsWith('.png')) {
      // Keep PNG (alpha / flat graphics), but quantise hard — these are 2-tone.
      out = await sharp(buf).png({ palette: true, quality: 80, effort: 9 }).toBuffer();
    } else {
      out = await sharp(buf)
        .jpeg({ quality: 80, mozjpeg: true, progressive: true, chromaSubsampling: '4:2:0' })
        .toBuffer();
    }

    // Never ship a "optimised" file that got bigger.
    if (out.length >= buf.length) out = buf;

    fs.writeFileSync(dest, out);
    before += buf.length;
    after += out.length;

    console.log(
      f.padEnd(46) +
        ((buf.length / 1024 | 0) + 'KB').padStart(9) +
        ((out.length / 1024 | 0) + 'KB').padStart(9) +
        ((100 - (out.length / buf.length) * 100).toFixed(0) + '%').padStart(8)
    );
  }

  console.log('-'.repeat(72));
  console.log(
    `TOTAL  ${(before / 1024 / 1024).toFixed(1)} MB  ->  ${(after / 1024 / 1024).toFixed(1)} MB` +
      `   (${(100 - (after / before) * 100).toFixed(0)}% smaller)`
  );
  console.log(`\nWritten to: ${OUT}`);
})();

const { exec } = require('child_process');

const scanWebsite = (req, res) => {
  const { url } = req.body;
  exec(`sqlmap -u "${url}" --batch --level=1 --risk=1`, (error, stdout) => {
    if (error) {
      return res.json({ message: 'Scan failed or target not vulnerable.' });
    }
    const isVulnerable = stdout.includes('is vulnerable');
    res.json({ message: isVulnerable ? 'Vulnerable' : 'Not Vulnerable' });
  });
};

module.exports = { scanWebsite };

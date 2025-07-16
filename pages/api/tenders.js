let tenders = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    tenders.push(req.body);
    res.json({ success: true });
  } else {
    res.json({ data: tenders });
  }
}

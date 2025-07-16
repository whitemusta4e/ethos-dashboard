export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Отримано дані:', req.body);
    res.json({ success: true });
  } else {
    res.json({ message: 'API працює' });
  }
}

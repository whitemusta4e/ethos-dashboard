let tendersData = {
  risks: [],
  opportunities: [],
  stats: { totalRisks: 0, totalOpportunities: 0, lastUpdate: new Date() }
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'GET') {
    return res.json({ success: true, data: tendersData });
  }

  if (req.method === 'POST') {
    const { tender, type = 'risk' } = req.body;
    
    if (!tender) {
      return res.status(400).json({ error: 'Tender data required' });
    }

    const formattedTender = {
      id: tender.id,
      title: tender.title,
      amount: tender.amount,
      customer: tender.customer,
      region: tender.region,
      category: tender.category,
      coordinates: tender.coordinates || [50.4501, 30.5234],
      ai_analysis: tender.ai_analysis,
      risk_score: tender.risk_score,
      timestamp: new Date()
    };

    if (type === 'risk') {
      tendersData.risks.push(formattedTender);
    } else {
      tendersData.opportunities.push(formattedTender);
    }

    tendersData.stats.lastUpdate = new Date();
    
    return res.json({ success: true, message: 'Tender added' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

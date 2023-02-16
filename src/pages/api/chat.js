const OPENAI_API_KEY = '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'

export default async function handler (req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { prompt } = req.body

  if (!prompt) {
    return res.status(400).json({ error: 'Se requiere un prompt' })
  }
  try {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: `Simula que eres la inteligencia artificial conversacional de ChatGPT y da una respuesta a la     siguiente prompt:\n\n${prompt}`,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      })
    })

    if (!response.ok) {
      console.error(response.statusText)
      return res.status(500).json({ error: 'OpenAI API error' })
    }
    const json = await response.json()

    return res.status(200).json({ response: json.choices[0].text.trim() })
  } catch (error) {
    return res.status(200).json({ response: 'Error en la API OpenAI' })
  }
}

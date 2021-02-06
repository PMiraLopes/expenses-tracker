import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation('home')

  const [response, setResponse] = useState('nothing yet')

  const onClick = () => {
    fetch("/.netlify/functions/hello")
      .then(response => response.json())
      .then(json => setResponse(json.msg))
  }

  return <section>
    <h1>
      {t('title')}
    </h1>
    <p>
      {response}
    </p>

    <button type='button' onClick={onClick}>Call lambda</button>
  </section>
}

export default Home

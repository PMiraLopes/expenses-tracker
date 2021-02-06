import { useTranslation } from 'react-i18next'

const NotFound = () => {
  const { t } = useTranslation('404')
  return (
    <main>
      <section>
        <div className='flex m-4 justify-center items-center font-bold'>
          {t('title')}
        </div>
      </section>
    </main>
  )
}

export default NotFound

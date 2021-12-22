export default function Product({ product }) {
  const { imageUrl, productTitle, description, submitterUrl } = product
  return (
    <>
      <img src={imageUrl} width='auto' height='250' alt='ImageMissing' />,
      <p>{productTitle}</p>
      <p>{description}</p>
      <p>
        <font size='4'>
          {' '}
          Submitted By:{' '}
          <img
            src={submitterUrl}
            alt='submittedByMissing'
            width='50'
            height='auto'
          />
        </font>
      </p>
    </>
  )
}

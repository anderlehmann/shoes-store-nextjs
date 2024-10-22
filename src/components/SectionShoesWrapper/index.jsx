import './SectionShoesWrapper.css'

export default function SectionShoesWrapper({ sectionTitle, children }) {
  return (
    <>
      {sectionTitle && <p id='text-top-category'>{sectionTitle}</p>}
      <section id='section-shoes-wrapper'>
        {children}
      </section>
    </>
  )
};
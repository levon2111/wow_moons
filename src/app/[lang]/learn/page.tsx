import Header from "@/app/[lang]/includes/header";
import "../../../styles/learn.scss";

export default function Learn() {
  return (
    <>
      <Header/>
      <section className="learn-top-banner">
        <div className="learn-top-banner-content">
          <i className="icon-learn" />
          <h2>We Will Help You Grow</h2>
          <h4>Lorem ipsum dolor sit amet consectetur. Viverra pellentesque cursus scelerisque senectus nisl.</h4>
        </div>
      </section>
    </>
  )
}
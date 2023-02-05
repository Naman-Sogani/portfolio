import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      img:
        "assets/myinfo.png",
      icon: "assets/twitter.png",
      desc:
        "I am working as a Software Engineer in LTIMindtree and has a total IT experience of 1.4+ years. I am looking for a change and aspiring a suitable Software Engineer role in an organization that provides me an opportunity to prove myself, where I can polish my skills through challenging tasks and thereby strive for the mutual growth.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>About me</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img
                className="user"
                src={d.img}
                alt=""
              />
            </div>
            <div className="center">
              {d.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
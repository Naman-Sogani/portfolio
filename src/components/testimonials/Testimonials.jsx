import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "assets/myinfo.png",
      icon: "assets/twitter.png",
      desc:
        "I am working as a Software Engineer in LTIMindtree and has a total IT experience of 1.4+ years. I am looking for a change and aspiring for a suitable Software Engineer role in an organization that provides me an opportunity to prove myself, where I can polish my skills through challenging tasks and thereby strive for the mutual growth.",
    },
    // {
    //   id: 2,
    //   name: "Alex Kalinski",
    //   title: "Co-Founder of DELKA",
    //   img:
    //     "assets/man.png",
    //   icon: "assets/youtube.png",
    //   desc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
    //   featured: true,
    // },
    // {
    //   id: 3,
    //   name: "Martin Harold",
    //   title: "CEO of ALBI",
    //   img:
    //     "assets/man.png",
    //   icon: "assets/linkedin.png",
    //   desc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    // },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>About me</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              {/* <img src="assets/right-arrow.png" className="left" alt="" /> */}
              <img
                className="user"
                src={d.img}
                alt=""
              />
              {/* <img className="right" src={d.icon} alt="" /> */}
            </div>
            <div className="center">
              {d.desc}
            </div>
            {/* <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
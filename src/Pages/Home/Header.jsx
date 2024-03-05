export default function HeaderSection () {
    return  (
        <section id="headerSection" className="headerSection">
            <div className="headeer--section--content--box">
                <div  className="header--section--content">
                    <p className="section--title">Hey, I'm Nadia</p>
                    <h1 className="header--section--title">
                        <span className="header--section--title-color">Front End</span>
                        {" "}
                        <br />
                        Developer
                    </h1>
                    <p className="header--setion-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        <br /> Praesentium adipisci laborum recusandae.
                        </p>
            </div>
            <button className="btn btn-primary">Contact Me</button>
            </div>
            <div className="header--section--img w-25 p-3" >
                <img src="/nadia-7_pp-3.jpg" alt="" />
            </div>
            
        </section>
    )
}
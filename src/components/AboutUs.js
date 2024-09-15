import React from 'react';


function AboutUs() {
  return (
    <div>
          <section className="about-us" id="services">
                  <div className="section-header">
                    <h1 className="section-heading">Services</h1>
                    <div className="underline" />
                  </div>
                  <div className="services">
                    <div className="service">
                      <div className="service-header">
                        <i className="fas fa-pen-nib" />
                        <h3>Interior</h3>
                      </div>
                      <p className="service-text">
                      Our team of experienced interior designers specializes in crafting stunning and personalized spaces that reflect your unique style and lifestyle. We believe that a well-designed interior can enhance your overall well-being and create a sense of harmony in your home or office.


                      </p>
                    </div>
                    <div className="service">
                      <div className="service-header">
                        <i className="fas fa-paint-roller" />
                        <h3>Exterior</h3>
                      </div>
                      <p className="service-text">
                      Our exterior design services can help you create a beautiful and welcoming entrance to your home or business. We work with you to design outdoor living spaces that are both functional and aesthetically pleasing, so you can enjoy the beauty of your surroundings all year round.


                      </p>
                    </div>
                    <div className="service">
                      <div className="service-header">
                        <i className="fas fa-pencil-alt" />
                        <h3>Design</h3>
                      </div>
                      <p className="service-text">
                      Our designers are passionate about creating unique and innovative design solutions that are tailored to your specific needs and preferences. We use our expertise to create spaces that are both functional and visually appealing, so you can enjoy a home or office that you love.
                      </p>
                    </div>
                    <div className="service">
                      <div className="service-header">
                        <i className="fas fa-paint-brush" />
                        <h3>Decoration</h3>
                      </div>
                      <p className="service-text">
                      From selecting the perfect furniture and accessories to creating a cohesive color palette, our decorating services can transform your space into a stylish and inviting environment. We pay attention to every detail to ensure that your home or office looks its best.
                      </p>
                    </div>
                    <div className="service">
                      <div className="service-header">
                        <i className="fas fa-ruler-combined" />
                        <h3>Planning</h3>
                      </div>
                      <p className="service-text">
                      Before we begin any project, we take the time to understand your vision and goals. We develop a detailed plan that outlines the scope of work, timeline, and budget, so you know exactly what to expect. Our project management expertise ensures that your project is completed on time and within budget.
                      </p>
                    </div>
                    <div className="service">
                      <div className="service-header">
                        <i className="far fa-building" />
                        <h3>Execution</h3>
                      </div>
                      <p className="service-text">
                      Our team of skilled craftsmen and artisans will bring your design vision to life. We pay close attention to every detail, from selecting the highest quality materials to ensuring that every finish is perfect. Our commitment to excellence guarantees that you will be thrilled with the results of your project.


                      </p>
                    </div>
                    {/* <div className="about-us-img-wrapper">
                      <img src="images/house2.png" alt='' />
                    </div> */}
                  </div>
                </section>
    </div>
  )
}

export default AboutUs;
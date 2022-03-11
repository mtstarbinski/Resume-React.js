import React from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { AiFillPhone, AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg"

const Contact = () => {

    return (
    <section title="Contact" className="contactContainer" >
        <a href='mailto:email@email.com'><MdEmail />email@email.com</a>
        <a href='https://www.linkedin.com/'><BsLinkedin />linkedin.com/in/user/</a>
        <span><AiFillPhone />(123) 456-7890</span>
        <a href='https://google.com'><CgWebsite />portfolio.com</a>
        <span><MdLocationOn />New York, NY</span>
        <a href='https://github.com/'><AiFillGithub />github.com/user</a>        
    </section>
    )

}

export default Contact;
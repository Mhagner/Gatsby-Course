import React from 'react'
import Layout from '../components/Layout'

const Contact = () => {
    return (
        <Layout>
            <main className="page">
                <section>
                    <article>
                        <h3>Want To Get In Touch?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magnam neque consectetur delectus, non possimus quisquam, culpa quam ut asperiores, commodi labore odit alias. Itaque beatae sapiente at vero. Delectus?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus dolore quaerat maiores suscipit, nam nesciunt fugiat inventore minima dolorem, facere, nemo eveniet omnis iure officiis qui tempore! Accusamus, facere?</p>
                    </article>
                    <article>
                        <form className="form contact-form">
                            <div className="form-row">
                                <label htmlFor="name">your name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">your email</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div className="form-row">
                                <label htmlFor="message">message</label>
                                <textarea type="text" name="message" id="message"></textarea>
                            </div>
                            <button className="btn block" type="submit">
                                submit
                            </button>
                        </form>
                    </article>
                </section>
            </main>
        </Layout>
    )
}

export default Contact

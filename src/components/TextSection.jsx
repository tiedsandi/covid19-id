import React from 'react'

const TextSection = () => {
    return (
        <div className='TextSection'>
            <div className='virus1'>
                <img src={'./images/virusTop.svg'} alt='virus' />
            </div>
            <div className='virus2'>
                <img src={'./images/virusBot.svg'} alt='virus' />
            </div>
            <h1 className="Title">Korona</h1>
            <h3 className="Subtitle">Penyakit Virus</h3>
            <p className="Text">
                Korona atau COVID-19 adalah penyakit yang disebabkan oleh virus.Penyakit ini dapat menyebabkan gejala-gejala seperti demam, batuk, dan kesulitan bernapas. Penyakit ini dapat menyebabkan kematian jika tidak ditangani dengan cepat. Virus dapat menular dengan mudah ke orang lain.
            </p>

            <a className='Button' href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" rel="noopener noreferrer" target="_blank">
                Baca Selengkapnya
            </a>

        </div>
    )
}

export default TextSection

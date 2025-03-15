import React from 'react'

export default function SectionContainer({ children , className }) {
    return (
        <section className={`${className} py-6 px-6 md:px-8`}>
            {children}
        </section>
    )
}

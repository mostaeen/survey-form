import React, { useState } from 'react'
import { TiTick } from 'react-icons/ti';
import { GoSmiley } from 'react-icons/go';

import './style.css'

function Form1() {
    const [clicked, setClicked] = useState('')
    const [checked, setChecked] = useState('')

    const [step, setStep] = useState(1)

    const handleClick = text => {
        setClicked(text)
    }

    const handleCheck = text => {
        setChecked(text)
    }

    const handleNext = () => {
        setStep(prev => prev + 1)
    }
    const handleBack = () => {
        setStep(prev => prev - 1)
    }

    const handleSubmit = () => {
        setStep(prev => prev + 1)
    }

    return (
        <div className="card w-50 h-75">
            <div className="card-body">
                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-center outer' style={{ borderBottom: '1px solid #F0EFE9', paddingBottom: '12px' }}>
                        <div style={{ borderRight: 'none' }} className='inner-1 px-1 d-flex justify-content-center align-items-center'>
                            {step === 1 ? <div className='fs-4 fw-bold text-muted px-2'>1</div>
                                : <div className='px-1' style={{ color: 'green', fontSize: '1.2rem', paddingBottom: '5px' }}>
                                    <TiTick />
                                </div>}
                            <div className='pe-2' style={{ fontSize: '11px', fontWeight: 'bold' }}>Your Feedback</div>
                        </div>

                        <div style={{ borderLeft: 'none', borderRight: 'none' }} className='inner-1 px-1 d-flex justify-content-center align-items-center'>
                            <div className={step === 1 ? 'fs-4 fw-bold opacity-25 px-2' : 'fs-4 fw-bold text-muted px-2'}>2</div>
                            <div className={step === 1 ? 'opacity-25 pe-2' : 'pe-2'} style={{ fontSize: '11px', fontWeight: 'bold' }}>Your Information</div>
                        </div>
                        <div style={{ borderLeft: 'none' }} className='inner-2 px-1 d-flex justify-content-center align-items-center'>
                            <div className={step === 3 ? 'fs-4 fw-bold text-muted px-2' : 'fs-4 fw-bold opacity-25 px-2'}>3</div>
                            <div className={step === 3 ? 'pe-2' : 'opacity-25 pe-2'} style={{ fontSize: '11px', fontWeight: 'bold' }}>Confirmation</div>
                        </div>
                    </div>
                    {(step === 1 || step === 2) && <div className='pt-3'>
                        <p style={{ fontWeight: 'bold', fontSize: '12px' }}>01. {step === 1 ? "How was your day?" : "Your Name"}</p>
                        {step === 1 ? <div>
                            <button onClick={() => handleClick('bad')} type="button" className={clicked === 'bad' ? "btn btn-sm btn-light ms-4 border border-primary" : "btn btn-sm btn-light ms-4"} style={{ fontSize: '12px', fontWeight: 'bold', color: '#585651' }}>Bad</button>
                            <button onClick={() => handleClick('okay')} type="button" className={clicked === 'okay' ? "btn btn-sm btn-light ms-4 border border-primary" : "btn btn-sm btn-light ms-4"} style={{ fontSize: '12px', fontWeight: 'bold', color: '#585651' }}>Okay</button>
                            <button onClick={() => handleClick('good')} type="button" className={clicked === 'good' ? "btn btn-sm btn-light ms-4 border border-primary" : "btn btn-sm btn-light ms-4"} style={{ fontSize: '12px', fontWeight: 'bold', color: '#585651' }}>Good</button>
                        </div>
                            : <div className='mx-3'>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John Doe"></input></div>}

                    </div>}

                    {(step === 1 || step === 2) && <div className='pt-3'>
                        <p style={{ fontWeight: 'bold', fontSize: '12px' }}>02. {step === 1 ? "How do you feel you're making difference?" : "Your Email"}</p>
                        {step === 1 ? <div>
                            <button onClick={() => handleCheck('yes')} type="button" className={checked === 'yes' ? "btn btn-sm btn-light ms-4 border border-primary" : "btn btn-sm btn-light ms-4"} style={{ fontSize: '12px', fontWeight: 'bold', color: '#585651' }}>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={checked === 'yes'} />
                                <label className="px-1 form-check-label" for="flexCheckDefault">
                                    Yes
                                </label>
                            </button>
                            <button onClick={() => handleCheck('no')} type="button" className={checked === 'no' ? "btn btn-sm btn-light ms-4 border border-primary" : "btn btn-sm btn-light ms-4"} style={{ fontSize: '12px', fontWeight: 'bold', color: '#585651' }}>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={checked === 'no'} />
                                <label className="px-1 form-check-label" for="flexCheckDefault">
                                    No
                                </label>
                            </button>
                        </div> : <div className='mx-3'>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="john@gmail.com"></input>
                        </div>}
                    </div>}
                    {step === 3 &&
                        <div>
                            <div className='d-flex justify-content-center pt-5' style={{ fontSize: '5rem', color: '#82EC24' }}>
                                <GoSmiley />

                            </div>
                            <p className='text-center pt-2' style={{ fontSize: '12px', fontWeight: 'bold' }}>Thanks for your feedback!</p>
                        </div>
                    }

                    {step === 1 &&
                        <div className='d-flex justify-content-end'>
                            <div>
                                <button onClick={handleNext} type="button" className="btn btn-primary px-4" style={{ fontSize: '12px', fontWeight: 'bold' }}>Next</button>
                            </div>

                        </div>}
                    {step === 2 &&
                        <div className='d-flex justify-content-end pt-3'>
                            <div>
                                <button onClick={handleBack} type="button" className="btn btn-light px-4" style={{ fontSize: '12px', fontWeight: 'bold' }}>Back</button>
                            </div>
                            <div>
                                <button onClick={handleSubmit} type="button" className="btn btn-primary px-4 mx-2" style={{ fontSize: '12px', fontWeight: 'bold' }}>Submit</button>
                            </div>

                        </div>}

                </div>
            </div>
        </div>
    )
}

export default Form1
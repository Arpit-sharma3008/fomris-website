// Join the Movement Form Component
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import './JoinMovement.css'

interface FormData {
    fullName: string
    email: string
    phone: string
    linkedin?: string
    instagram?: string
    involvement: string
    investmentRange?: string
    platform?: string
    message: string
}

const JoinMovement = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<FormData>()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const involvementType = watch('involvement')

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true)

        try {
            // Replace with your Google Sheets Web App URL
            // For now, we'll just log to console and show success
            console.log('Form Data:', data)

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500))

            setSubmitStatus('success')
            reset()

            // Reset status after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000)
        } catch (error) {
            console.error('Submission error:', error)
            setSubmitStatus('error')
            setTimeout(() => setSubmitStatus('idle'), 5000)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="join-movement" className="section join-section cloudy-bg">
            <div className="container">
                <motion.div
                    className="join-content"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="join-title">Be Part of the Change</h2>
                    <p className="join-subtitle">
                        We are opening limited opportunities to collaborate, contribute, and build together.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="join-form glass-card">
                        {/* Full Name */}
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name *</label>
                            <input
                                {...register('fullName', { required: 'Full name is required' })}
                                type="text"
                                id="fullName"
                                placeholder="Enter your full name"
                                className={errors.fullName ? 'error' : ''}
                            />
                            {errors.fullName && <span className="error-message">{errors.fullName.message}</span>}
                        </div>

                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="email">Email Address *</label>
                            <input
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address'
                                    }
                                })}
                                type="email"
                                id="email"
                                placeholder="your.email@example.com"
                                className={errors.email ? 'error' : ''}
                            />
                            {errors.email && <span className="error-message">{errors.email.message}</span>}
                        </div>

                        {/* Phone */}
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number *</label>
                            <input
                                {...register('phone', {
                                    required: 'Phone number is required',
                                    pattern: {
                                        value: /^[0-9+\-\s()]+$/,
                                        message: 'Invalid phone number'
                                    }
                                })}
                                type="tel"
                                id="phone"
                                placeholder="+91 00000 00000"
                                className={errors.phone ? 'error' : ''}
                            />
                            {errors.phone && <span className="error-message">{errors.phone.message}</span>}
                        </div>

                        {/* LinkedIn */}
                        <div className="form-group">
                            <label htmlFor="linkedin">LinkedIn Profile URL (Optional)</label>
                            <input
                                {...register('linkedin')}
                                type="url"
                                id="linkedin"
                                placeholder="https://linkedin.com/in/yourprofile"
                            />
                        </div>

                        {/* Instagram */}
                        <div className="form-group">
                            <label htmlFor="instagram">Instagram Handle (Optional)</label>
                            <input
                                {...register('instagram')}
                                type="text"
                                id="instagram"
                                placeholder="@yourusername"
                            />
                        </div>

                        {/* Involvement Type */}
                        <div className="form-group">
                            <label htmlFor="involvement">How would you like to be involved? *</label>
                            <select
                                {...register('involvement', { required: 'Please select an option' })}
                                id="involvement"
                                className={errors.involvement ? 'error' : ''}
                            >
                                <option value="">Select an option</option>
                                <option value="intern">Intern / Early Team</option>
                                <option value="investor">Investor</option>
                                <option value="influencer">Influencer / Creator Partner</option>
                                <option value="expert">Industry Expert</option>
                                <option value="general">General Interest</option>
                            </select>
                            {errors.involvement && <span className="error-message">{errors.involvement.message}</span>}
                        </div>

                        {/* Conditional: Investment Range */}
                        {involvementType === 'investor' && (
                            <motion.div
                                className="form-group"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                transition={{ duration: 0.3 }}
                            >
                                <label htmlFor="investmentRange">Investment Range (Optional)</label>
                                <input
                                    {...register('investmentRange')}
                                    type="text"
                                    id="investmentRange"
                                    placeholder="e.g., ₹1,00,000 - ₹5,00,000"
                                />
                            </motion.div>
                        )}

                        {/* Conditional: Platform */}
                        {involvementType === 'influencer' && (
                            <motion.div
                                className="form-group"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                transition={{ duration: 0.3 }}
                            >
                                <label htmlFor="platform">Primary Platform</label>
                                <select {...register('platform')} id="platform">
                                    <option value="">Select platform</option>
                                    <option value="instagram">Instagram</option>
                                    <option value="youtube">YouTube</option>
                                    <option value="twitter">Twitter/X</option>
                                    <option value="linkedin">LinkedIn</option>
                                    <option value="other">Other</option>
                                </select>
                            </motion.div>
                        )}

                        {/* Message */}
                        <div className="form-group">
                            <label htmlFor="message">Tell us briefly why this resonates with you *</label>
                            <textarea
                                {...register('message', { required: 'Please share your thoughts' })}
                                id="message"
                                rows={4}
                                placeholder="Share your thoughts..."
                                className={errors.message ? 'error' : ''}
                            />
                            {errors.message && <span className="error-message">{errors.message.message}</span>}
                        </div>

                        {/* Submit Button */}
                        <div className="form-submit">
                            <button
                                type="submit"
                                className="btn btn-primary submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="spinner"></span>
                                        Submitting...
                                    </>
                                ) : (
                                    'Join the Movement'
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <motion.p
                                    className="submit-success"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    ✓ Thank you! We'll be in touch soon.
                                </motion.p>
                            )}

                            {submitStatus === 'error' && (
                                <motion.p
                                    className="submit-error"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    ✗ Something went wrong. Please try again.
                                </motion.p>
                            )}
                        </div>

                        {/* Privacy Note */}
                        <p className="privacy-note">
                            We respect privacy. No spam. No public disclosures.
                        </p>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}

export default JoinMovement

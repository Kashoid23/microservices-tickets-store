'use client'

export default function Form({ title, errors, email, setEmail, password, setPassword, handleSubmit }) {
    return <form className="mt-5 w-25 mx-auto">
        <h1>{title}</h1>
        <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {errors}
        <div className="float-end">
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">{title}</button>
        </div>
    </form>
};

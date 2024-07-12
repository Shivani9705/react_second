import React from 'react';

const File1 = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-sm-12 col-md-6 bg-warning display-1 text-light'>
                    <button type="button" className="btn btn-primary">Primary</button>
                    <button type="button" className="btn btn-secondary">Secondary</button>
                    <button type="button" className="btn btn-success">Success</button>
                    <button type="button" className="btn btn-danger">Danger</button>
                    <button type="button" className="btn btn-warning">Warning</button>
                    <button type="button" className="btn btn-info">Info</button>
                    <button type="button" className="btn btn-light">Light</button>
                    <button type="button" className="btn btn-dark">Dark</button>

                    <button type="button" class="btn btn-link">Link</button>
                </div>
                <div className='col-sm-12 col-md-6 bg-success display-1 text-light'>
                    <div className="mb-3">
                        <label forName="exampleFormControlInput1" className='text-left' >Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label forName="exampleFormControlTextarea1" >Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default File1;

import React from 'react';

const Contact = () => {
    return (
        <div>

            <div class="card flex-shrink-0 w-full max-w-sm mx-auto my-8 shadow-2xl bg-base-100">
                <div class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="password" class="input input-bordered" />

                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <textarea className='input input-bordered h-[150px]' name="" id="" cols="30" rows="10" placeholder='Your message'></textarea>

                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Send</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;
import React, { useState } from "react";

const pyLab = () => {
    return (
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="">
                <iframe
                src="https://jupyter.org/try-jupyter/lab/?path=notebooks/Intro.ipynb"
                width="100%"
                height="800px"
                >
                </iframe>
            </div>
    </div>
    )
}

export default pyLab
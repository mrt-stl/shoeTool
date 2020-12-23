import React from "react"
import { Link } from "react-router-dom"

import styled from "styled-components"

const AdminButton = styled.div`
    position: fixed;
    top: 40px;
    left: 40px;
    cursor: pointer;
    text-decoration: none;
    color: black;

    span {
        position: absolute;
        left: 0px;
        top: 15px;
        font-size: 1.3rem;
        transform: rotateX(180deg);
        opacity: 0;
    }

    :hover .rotate {
        transition: all 0.5s ease-out;
        transform: rotateX(180deg);

        span {
            opacity: 1;
            transition: all 0.5s ease-out;
        }

        svg {
            opacity: 0.1;
            transition: all 0.5s ease-out;
        }
    }
`

export default class adminButton extends React.Component {
    render() {
        return (
            <Link to="/admin">
                <AdminButton>
                    <div className="rotate">
                        <svg
                            height="60px"
                            viewBox="0 -133 512.00066 512"
                            width="60px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="m240.628906 60.675781c5.902344 3.976563 13.625-2.023437 11.433594-8.707031-2.144531-6.539062-11.609375-6.878906-14.230469-.519531-1.363281 3.300781-.203125 7.25 2.796875 9.226562zm0 0" />
                            <path d="m498.902344 128.285156c-7.628906-7.625-23.601563-12.722656-48.84375-15.582031-14.746094-1.671875-27.996094-2.019531-32.328125-2.089844-7.074219-2.839843-17.058594-7.238281-29.304688-13.132812 2.191407-2.976563 1.949219-7.179688-.742187-9.875-2.972656-2.96875-7.785156-2.96875-10.753906 0l-2.816407 2.816406c-3.707031-1.871094-7.554687-3.847656-11.542969-5.929687l.128907-.128907c2.96875-2.96875 2.96875-7.78125 0-10.753906-2.96875-2.96875-7.785157-2.96875-10.753907 0l-3.414062 3.414063c-3.671875-1.992188-7.429688-4.058594-11.273438-6.199219l.457032-.457031c2.96875-2.96875 2.96875-7.78125 0-10.753907-2.96875-2.96875-7.785156-2.96875-10.753906 0l-3.425782 3.425781c-3.621094-2.085937-7.300781-4.230468-11.03125-6.441406l.226563-.226562c2.96875-2.96875 2.96875-7.78125 0-10.753906-2.96875-2.96875-7.78125-2.96875-10.753907 0l-2.90625 2.910156c-15.742187-9.613282-32.242187-20.207032-49.109374-31.757813-3.035157-2.285156-26.773438-19.597656-44.4375-16.371093-5.9375 1.085937-10.753907 4.328124-13.933594 9.378906-11.65625 18.507812-11.675782 33.085937.5 48.527344-11.414063 7.007812-23.113282 11.972656-33.265625 11.972656-17.886719 0-27.292969-17.117188-35.589844-32.214844-6.851563-12.464844-13.320313-24.238281-24.898437-24.238281-1.902344 0-3.863282.117187-5.824219.347656-20.167969 2.34375-38.105469 15.535156-46.816407 34.429687-7.265624 15.777344-17.324218 39.15625-23.972656 60.949219-7.699218 25.222657-9.140625 42.222657-4.402344 52.816407l-16.738281 40.289062c-1.253906 3.019531-.441406 6.5 2.023438 8.648438 1.59375 1.394531 40.097656 34.132812 125.972656 34.132812h272.867187c55.515626 0 97.867188-24.25 100.847657-56.996094 5.167969-5.023437 8.558593-12.78125 9.460937-21.949218 1.421875-14.445313-3.382812-28.730469-12.851562-38.207032zm-23.914063 4.464844c-10.742187 4.140625-25.234375 9.605469-37.703125 13.882812-8.03125 2.753907-32.472656 11.132813-43.617187 4.765626-.773438-.441407-1.664063-1.042969-2.542969-1.953126 21.242188-3.015624 33.203125-8.871093 36.445312-17.796874.558594-1.539063.9375-3.390626.855469-5.488282 15.859375.800782 34.074219 2.960938 46.5625 6.589844zm-192.503906-56.886719c1.484375 1.484375 3.429687 2.226563 5.378906 2.226563 1.945313 0 3.890625-.742188 5.375-2.226563l8.160157-8.15625c3.730468 2.222657 7.398437 4.382813 11 6.472657l-4.929688 4.925781c-2.96875 2.96875-2.96875 7.785156 0 10.753906 1.484375 1.484375 3.433594 2.226563 5.378906 2.226563 1.945313 0 3.890625-.742188 5.378906-2.226563l7.863282-7.863281c3.847656 2.15625 7.597656 4.230468 11.246094 6.222656l-4.882813 4.882812c-2.96875 2.96875-2.96875 7.785157 0 10.753907 1.488281 1.484375 3.433594 2.226562 5.378906 2.226562 1.945313 0 3.890625-.742187 5.378907-2.226562l8.132812-8.132813c3.996094 2.101563 7.835938 4.089844 11.511719 5.960938l-5.414063 5.414062c-2.96875 2.96875-2.96875 7.785156 0 10.753906 1.484375 1.484376 3.433594 2.226563 5.378906 2.226563 1.945313 0 3.890626-.742187 5.375-2.226563l9.011719-9.011718c18.15625 8.847656 30.390625 14.03125 34.605469 15.773437.824219.960938 1.207031 1.652344 1.351562 2.011719-1.347656 1.839844-9.695312 6.71875-33.898437 8.871094-29.210937 2.597656-66.546875 32.976562-75.175781 54.332031-22.644532-2.335937-47.992188-5.253906-73.914063-8.40625-2.75-12.523437-13.109375-24.730469-31.3125-36.816406l80.957031-90.089844c2.753907 1.726563 5.480469 3.421875 8.179688 5.078125l-5.511719 5.515625c-2.972656 2.96875-2.972656 7.785156-.003906 10.753906zm-78.027344-57.984375c.90625-1.441406 2.042969-2.195312 3.792969-2.515625 6.464844-1.191406 17.210938 3.734375 25.5625 8.839844-7.234375 7.367187-17.652344 16.992187-29.144531 25.539063-8.867188-10.585938-8.601563-18.535157-.210938-31.863282zm-144.949219 37.085938c6.503907-14.109375 19.820313-23.953125 34.761719-25.6875 1.382813-.160156 2.75-.246094 4.066407-.246094 2.582031 0 8.429687 10.640625 11.570312 16.355469 5.203125 9.472656 11.488281 20.902343 20.726562 29.132812-9.523437 5.167969-20.746093 6.210938-31.105468 2.828125l-43.695313-14.261718c1.183594-2.652344 2.398438-5.34375 3.675781-8.121094zm-18.871093 45.765625c12.832031 3.175781 42.964843 11.027343 74.65625 22.105469.832031.289062 1.675781.425781 2.507812.425781 3.144531 0 6.085938-1.960938 7.179688-5.097657 1.382812-3.960937-.703125-8.300781-4.667969-9.6875-30.875-10.789062-60.316406-18.582031-74.304688-22.082031 1.183594-2.992187 2.4375-6.089843 3.769532-9.285156l45.027344 14.695313c5.558593 1.816406 11.292968 2.710937 17 2.710937 9.957031 0 19.832031-2.722656 28.53125-8.039063l5.128906-3.132812c4.027344 1.363281 8.457031 2.140625 13.359375 2.140625 33.960937 0 74.277343-38.648437 87.75-52.625 6.863281 4.648437 13.617187 9.101563 20.238281 13.378906l-81.195312 90.355469c-10.417969-5.785156-22.644532-11.550781-36.726563-17.320312-3.886719-1.589844-8.328125.269531-9.917969 4.15625-1.59375 3.886718.265625 8.324218 4.152344 9.917968 47.355469 19.402344 64.507812 35.292969 70.128906 45.992188-81.421875-10.113282-163.925781-21.773438-182.546875-24.425782-2.394531-7.496093-.429687-24.871093 9.929688-54.183593zm422.984375 115.5c-16.285156 9.027343-38.363282 14-62.175782 14h-272.867187c-64.121094 0-99.953125-19.511719-111.65625-27.261719l13.589844-32.71875c42.027343 5.992188 284.960937 40.242188 347.414062 40.242188 1.484375 0 2.960938-.011719 4.425781-.03125 4.199219-.0625 7.554688-3.515626 7.496094-7.710938-.0625-4.164062-3.453125-7.496094-7.601562-7.496094-.039063 0-.074219 0-.109375 0-1.394531.019532-2.796875.027344-4.210938.027344-12.542969 0-32.925781-1.464844-57.730469-3.84375 3.179688-5.152344 9.164063-12.304688 18.226563-19.863281 12.160156-10.144531 25.265625-17.277344 36.261719-19.917969 2.4375 5.644531 6.261718 9.984375 11.441406 12.945312 5.433594 3.105469 11.839844 4.324219 18.664062 4.324219 12.226563 0 25.78125-3.914062 37.429688-7.910156 17.671875-6.058594 39.296875-14.453125 48.992188-18.261719 4.832031 7.023438 6.046874 15.757813 5.410156 22.25-.570313 5.777344-2.59375 10.625-5.347656 12.933594-5.78125 1.976562-36.519532 11.933594-79.347657 15.792969-4.183593.378906-7.269531 4.074219-6.890625 8.257812.378906 4.183594 4.09375 7.265625 8.257813 6.890625 31.949219-2.878906 57.199219-8.933594 71.429687-12.988281-4.613281 9.867187-14.519531 16.691406-21.101562 20.339844zm0 0" />
                        </svg>
                        <span>Admin</span>
                    </div>
                </AdminButton>
            </Link>
        )
    }
}

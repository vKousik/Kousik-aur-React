import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/hiteshchoudhary"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://discord.com/users/your-discord-id"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Discord
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2025
                        <a href="https://github.com/vKousik" className="hover:underline">
                            KousikMondal
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <a href="https://github.com/your-github-profile" target="_blank" rel="noreferrer">
                            <img
                                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                                alt="GitHub"
                                className="w-5 h-5"
                            />
                            <span className="sr-only">GitHub account</span>
                        </a>
                        <a href="https://discord.com/users/your-discord-id" target="_blank" rel="noreferrer">
                            <img
                                src="https://cdn.worldvectorlogo.com/logos/discord-6.svg"
                                alt="Discord"
                                className="w-5 h-5"
                            />
                            <span className="sr-only">Discord account</span>
                        </a>
                        <a href="https://facebook.com/your-facebook-profile" target="_blank" rel="noreferrer">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                                alt="Facebook"
                                className="w-5 h-5"
                            />
                            <span className="sr-only">Facebook account</span>
                        </a>
                        <a href="https://instagram.com/your-instagram-profile" target="_blank" rel="noreferrer">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                                alt="Instagram"
                                className="w-5 h-5"
                            />
                            <span className="sr-only">Instagram account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

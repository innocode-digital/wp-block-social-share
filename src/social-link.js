import {
	BLOCK_CLASS_NAME,
	Socials,
} from './constants';

export function getSocialLink(type, postTitle, postLink) {
  switch (type) {
    case Socials.FACEBOOK:
      return (
        <a
					className={`${BLOCK_CLASS_NAME}__link`}
					href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
						postLink
					)}`}
					target="_blank"
					rel="noreferrer noopener"
					aria-label="share on Facebook"
				>
					<svg
						focusable="false"
						className={`${BLOCK_CLASS_NAME}__icon ${BLOCK_CLASS_NAME}__icon--facebook`}
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 320 512"
					>
						<path
							fill="currentColor"
							d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
						></path>
					</svg>
				</a>
      );

    case Socials.TWITTER:
      return (
        <a
					className={`${BLOCK_CLASS_NAME}__link`}
					href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
						postTitle
					)}&url=${encodeURIComponent(postLink)}`}
					target="_blank"
					rel="noreferrer noopener"
					aria-label="share on Twitter"
				>
					<svg
						focusable="false"
						className={`${BLOCK_CLASS_NAME}__icon ${BLOCK_CLASS_NAME}__icon--twitter`}
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<path
							fill="currentColor"
							d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
						></path>
					</svg>
				</a>
      );

    case Socials.LINKED_IN:
      return (
        <a
					className={`${BLOCK_CLASS_NAME}__link`}
					href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
						postLink
					)}`}
					target="_blank"
					rel="noreferrer noopener"
					aria-label="share on LinkedIn"
				>
					<svg
						focusable="false"
						className={`${BLOCK_CLASS_NAME}__icon ${BLOCK_CLASS_NAME}__icon--linkedin`}
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path
							fill="currentColor"
							d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
						></path>
					</svg>
				</a>
      );

    case Socials.EMAIL:
      return (
        <a
					className={`${BLOCK_CLASS_NAME}__link`}
					href={`mailto:?body=${encodeURIComponent(postTitle + ' - ' + postLink)}.`}
					target="_blank"
					rel="noreferrer noopener"
					aria-label="share by email"
				>
					<svg
						focusable="false"
						className={`${BLOCK_CLASS_NAME}__icon ${BLOCK_CLASS_NAME}__icon--email`}
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<path
							fill="currentColor"
							d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
						></path>
					</svg>
				</a>
      );
  }
}
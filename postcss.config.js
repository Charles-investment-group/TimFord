/**
 * Tailwind only affects stylesheets that contain @tailwind directives, which in
 * this project is src/lib/admin/admin.css alone. The landing-page CSS passes
 * through untouched.
 */
export default {
	plugins: {
	        tailwindcss: {},
		autoprefixer: {}
	}
};

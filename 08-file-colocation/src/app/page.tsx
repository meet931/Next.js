export default function Home() {
    return (
        <div>
            <h2>File Colocation</h2>

            <pre>
            Each folder represents a route segment that is mapped to a corresponding segment in a URL path. <br /> <br />

            However, even though route structure is defined through folders, a route is not publicly accessible until a page.js or route.js file is added to a route segment. <br /> <br />
           
            <img src="https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fproject-organization-not-routable.png&w=1920&q=75" width={800} height={400} alt="" /> <br /><br />

            And, even when a route is made publicly accessible, only the content returned by page.js or route.js is sent to the client. <br /> <br />

            <img src="https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fproject-organization-colocation.png&w=1920&q=75" width={800} height={400} alt="" />

            <br />
            </pre>
            
        </div>
    );
}
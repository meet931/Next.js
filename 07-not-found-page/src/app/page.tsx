export default function Home() {
    return (
        <div>
            <h2>Catch All Segments</h2>

            <pre>
            - Dynamic Segments can be extended to catch-all subsequent segments by adding an ellipsis inside the brackets [...folderName]. <br /> <br />

            - To prevent an error when we visit it's root path, we need to create a default page. This page will be displayed when we visit the root path of the catch-all segment. <br /> <br />

            - To implement it, we have to make [slug] -> [[slug]]
            </pre>

            <dl>
                <dt>Feature 1</dt>
                <dd>Concept 1</dd>
                <dd>Concept 2</dd>
                <dd>Concept 3</dd>

                <dt>Feature 2</dt>
                <dd>Concept 1</dd>
                <dd>Concept 2</dd>
                <dd>Concept 3</dd>
            </dl>
        </div>
    );
}
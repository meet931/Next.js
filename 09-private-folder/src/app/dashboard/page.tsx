// we have to export the function in the file to make it accessible to the rest of the application.
// import Linechart  from './line-chart';

export function Barchar() {
    return (
        <div>
            Barchar
        </div>
    );
}

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            {/* <Barchar /> */}
            {/* <Linechart /> */}
        </div>
    );
}
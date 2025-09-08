import Link from 'next/link';
export default function mealsHome(){
    return(
    <main>
        <h1 style={{ color: 'white', textAlign: 'center' }}>MEALS</h1>
        <p><Link href="/meals/share">Share</Link></p>
    </main>
    );
}
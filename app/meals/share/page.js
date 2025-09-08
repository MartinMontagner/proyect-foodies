import Link from 'next/link';
export default function shareHome(){
    return(
    <main>
        <h1 style={{ color: 'white', textAlign: 'center' }}>Share Home</h1>
        <p><Link href="/meals/slug-1">Slug 1</Link></p>
        <p><Link href="/meals/slug-2">Slug 2</Link></p>
    </main>
    );
}
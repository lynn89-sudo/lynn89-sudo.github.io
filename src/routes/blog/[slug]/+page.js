export async function load({params, fetch}) {
    const { slug } = params;
    return { slug };
}
import MainLayout from '@/layouts/MainLayout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <section className="p-8 flex flex-col h-full justify-center">
        <h1 className="text-3xl font-bold font-poppins underline">Mohammad Mirzaei ⚡</h1>
        <p className="text-md">
        Develop a single-page application (SPA) using Next.js, which features a user interface capable of performing Create, Read, Update, and Delete (CRUD) operations on a list of users. The application will interact with the API found at: https://reqres.in/.
        </p>
      </section>
    </MainLayout>
  );
}

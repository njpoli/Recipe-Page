import Image from 'next/image';
import { youngSerif } from './fonts';
import Footer from './components/ui/footer';

const nutritionStats = [
  {
    label: 'Calories',
    amount: '277kcal',
  },
  {
    label: 'Carbs',
    amount: '0g',
  },
  {
    label: 'Protein',
    amount: '20g',
  },
  {
    label: 'Fat',
    amount: '22g',
  },
];

export default function Home() {
  return (
    <main className='h-full w-full flex min-h-screen bg-neutral-eggshell justify-center text-neutral-dark-charcoal relative'>
      <article className='w-full max-w-none sm:max-w-2xl bg-neutral-white rounded-none sm:rounded-2xl mt-0 sm:mt-20 flex flex-col pt-0 sm:pt-6 pb-6 mb-0 sm:mb-20'>
        <header className='flex flex-col gap-6'>
          <figure className='w-full px-0 sm:px-6'>
            <Image
              className='rounded-none sm:rounded-lg w-full'
              src={'/image-omelette.jpeg'}
              alt='Omelette on a plate'
              width={500}
              height={500}
            />
          </figure>
          <div className='flex flex-col items-start px-6 gap-5'>
            <h1
              className={`${youngSerif.className} text-dark-charcoal text-4xl`}
            >
              Simple Omelette Recipe
            </h1>
            <p>
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>
        </header>
        <div className='px-6 pt-6 gap-5'>
          <section className='bg-neutral-rose-white rounded-md p-4'>
            <h3 className='text-primary-dark-raspberry font-semibold text-2xl'>
              Preparation time
            </h3>
            <ul className='list-disc list-inside marker:text-primary-dark-raspberry space-y-2 pt-3'>
              <li>
                <b>Total</b>: Approximately 10 minutes
              </li>
              <li>
                <b>Preparation</b>: 5 minutes
              </li>
              <li>
                <b>Cooking</b>: 5 minutes
              </li>
            </ul>
          </section>
          <section className='pt-6'>
            <h2
              className={`${youngSerif.className} text-primary-nutmeg text-3xl mb-4`}
            >
              Ingredients
            </h2>
            <ul className='list-disc marker:text-primary-nutmeg list-inside space-y-2'>
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </section>
          <hr className='my-6' />
          <section>
            <h2
              className={`${youngSerif.className} text-primary-nutmeg text-3xl mb-4`}
            >
              Instructions
            </h2>
            <ol className='list-decimal marker:text-primary-nutmeg list-inside space-y-2'>
              <li>
                <b>Beat the eggs</b>: In a bowl, beat the eggs with a pinch of
                salt and pepper until they are well mixed. You can add a
                tablespoon of water or milk for a fluffier texture.
              </li>

              <li>
                <b>Heat the pan</b>: Place a non-stick frying pan over medium
                heat and add butter or oil.
              </li>

              <li>
                <b>Cook the omelette</b>: Once the butter is melted and
                bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </li>

              <li>
                <b>Add fillings (optional)</b>: When the eggs begin to set at
                the edges but are still slightly runny in the middle, sprinkle
                your chosen fillings over one half of the omelette.
              </li>

              <li>
                <b>Fold and serve</b>: As the omelette continues to cook,
                carefully lift one edge and fold it over the fillings. Let it
                cook for another minute, then slide it onto a plate.
              </li>

              <li>
                <b>Enjoy</b>: Serve hot, with additional salt and pepper if
                needed.
              </li>
            </ol>
          </section>
          <hr className='my-6' />
          <section>
            <h2
              className={`${youngSerif.className} text-primary-nutmeg text-3xl mb-4`}
            >
              Nutrition
            </h2>
            <p className='mb-4'>
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <table className='w-full table-fixed'>
              <tbody className='divide-y'>
                {nutritionStats.map(({ label, amount }) => (
                  <tr key={label}>
                    <td className='py-2'>{label}</td>
                    <td className='text-primary-nutmeg py-2'>{amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
}

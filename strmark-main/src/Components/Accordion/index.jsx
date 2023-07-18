import React from 'react';
import Accordion from './Accordion';

export default function FaqAccordion () {
  const accordionData = [
    {
      title: 'Section 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'Section 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'Section 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];

  return (
    <div className='faq-accordion mt-20 mb-8 mx-8'>
      <div className="head-text">
		    Frequently Asked Questions
	    </div>
      <div className="accordion mx-auto justify-center flex">
		<div className='accordion-container w-full md:w-[75%] px-0 md:px-10 sm:py-10'>
			{accordionData.map(({ title, content }) => (
			<Accordion title={title} content={content} />
			))}
		</div>
      </div>
    </div>
  );
}

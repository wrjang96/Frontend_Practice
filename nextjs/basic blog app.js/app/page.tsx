const HomePage = () => {
  return (
    <div>HomePage</div>
  )
}

export default HomePage




// import Image from "next/image";
// import pageStyles from "./page.module.css";
// import { getSortedPostsData } from "@/lib/posts";
// import Link from 'next/link'

// export default async function Home() {
//   const allPostsData = getSortedPostsData();

//   return (
//     <div>
//       <head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </head>
//       <section className={`${pageStyles.headingMd} ${pageStyles.padding1px}`}>
//         <h2 className={pageStyles.headingLg}>Blog</h2>
//         <ul className={pageStyles.list}>
//           {allPostsData.map(({ id, date, title }) => (
//             <li key={id} className={pageStyles.listItem}>
//               <Link href={`/posts/${id}`}>
//                   {title}
//               </Link>
//               {/* <a>{title}</a> */}
//               <br />
//               <small className={pageStyles.lightText}>{date}</small>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// }

// Next 12 Code is below 

// export default function Home({allPostsData}:{
//   allPostsData: {
//     date: string
//     title: string
//     id: string
//   }[]
// }) {
//   return (
//     // <main className={styles.main}>
//       <div>
//          <head>
//            <title> Create Next App</title>
//            <meta name="description" content="Generated by create next app"/>
//            <link rel="icon" href="/favicon.ico"/> 
//          </head>
//          <section className={'${pageStyles.headingMd} ${pageStyles.padding1px}'}>
//          <h2 className={pageStyles.headingLg}>Blog</h2>
//           <ul className={pageStyles.list}>
//             {allPostsData.map(({ id, date, title }) => (
//               <li key={id} className={pageStyles.listItem}>   
//                 <br />
//                 <small className={pageStyles.lightText}>
//                   {date}
//                 </small>
//               </li>
//             ))}
//           </ul>
//          </section>
         
//      </div>
      
//   );
// }
// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }
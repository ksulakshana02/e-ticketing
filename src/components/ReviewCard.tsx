// import * as React from "react";
//
// interface ReviewCardProps {
//   text: string;
//   authorName: string;
//   role: string;
//   avatarUrl?: string;
// }
//
// const ReviewCard: React.FC<ReviewCardProps> = ({
//   text,
//   authorName,
//   role,
//   avatarUrl,
// }) => {
//   return (
//     <article className="flex flex-col self-stretch px-6 py-9 my-auto bg-white rounded-md border-2 border-violet-100 border-solid min-w-60 w-[400px] max-md:px-5">
//       <figure>
//         <blockquote className="text-base leading-6 text-ellipsis text-neutral-800">
//           {text}
//         </blockquote>
//         <figcaption className="flex gap-6 self-start mt-4 text-xs font-medium text-neutral-900">
//           {avatarUrl && (
//             <img
//               src={avatarUrl}
//               alt={`${authorName}'s profile`}
//               className="object-contain shrink-0 w-10 aspect-square rounded-[100px]"
//             />
//           )}
//           <div className="my-auto w-full">
//             {authorName}
//             <br />
//             {role}
//           </div>
//         </figcaption>
//       </figure>
//     </article>
//   );
// };
//
// export default ReviewCard;

// "use client";
//
// import * as React from "react";
//
// interface ProfileInfo {
//   name: string;
//   role: string;
//   imageUrl: string;
// }
//
// const ReviewCard: React.FC = () => {
//   const profile: ProfileInfo = {
//     name: "Nirosh Fernando",
//     role: "Finance Executive",
//     imageUrl: "https://cdn.builder.io/api/v1/image/assets/25b097a14d4d494988b250fb94a02cc0/cff38261c152d4aee3eafb4ebdd53707d333cd3c?placeholderIfAbsent=true",
//   };
//
//   return (
//       <article className="flex flex-col px-6 py-9 bg-white rounded-md border-2 border-violet-100 border-solid w-full max-w-[400px] mx-auto">
//         <blockquote className="text-base leading-6 text-ellipsis text-neutral-800 mb-4">
//           <p>
//             credit where its due having raised the issue with they quickly got back
//             to me and refunded the difference. They also managed to get me the
//             tickets so my daughter got to see Taylor Swift
//           </p>
//         </blockquote>
//         <figure className="flex gap-4 sm:gap-6 self-start text-xs font-medium text-neutral-900">
//           <img
//               src={profile.imageUrl}
//               alt={`Profile picture of ${profile.name}`}
//               className="object-contain shrink-0 w-10 aspect-square rounded-full"
//           />
//           <figcaption className="my-auto">
//             {profile.name}
//             <br />
//             {profile.role}
//           </figcaption>
//         </figure>
//       </article>
//   );
// };
//
// export default ReviewCard;

"use client";

import * as React from "react";

interface ProfileInfo {
    name: string;
    role: string;
    imageUrl: string;
}

const ReviewCard: React.FC = () => {
    const profile: ProfileInfo = {
        name: "Nirosh Fernando",
        role: "Finance Executive",
        imageUrl:
            "https://cdn.builder.io/api/v1/image/assets/25b097a14d4d494988b250fb94a02cc0/cff38261c152d4aee3eafb4ebdd53707d333cd3c?placeholderIfAbsent=true",
    };

    return (
        <article
            className="flex flex-col px-4 py-6 md:px-6 md:py-9 bg-white rounded-md border-2 border-violet-100 border-solid w-full max-w-[400px] mx-auto"
        >
            <blockquote
                className="text-sm leading-5 md:text-base md:leading-6 text-ellipsis text-neutral-800 mb-4"
            >

                <p><span className="text-6xl text-[#2D2A70]">❝</span>
                    credit where its due having raised the issue with they quickly got back
                    to me and refunded the difference. They also managed to get me the
                    tickets so my daughter got to see Taylor Swift.
                    <span className="text-6xl text-[#2D2A70]">❝</span>
                </p>

            </blockquote>
            <figure className="flex gap-4 md:gap-6 self-start text-xs md:text-sm font-medium text-neutral-900">
                <img
                    src={profile.imageUrl}
                    alt={`Profile picture of ${profile.name}`}
                    className="object-contain shrink-0 w-8 md:w-10 aspect-square rounded-full"
                />
                <figcaption className="my-auto">
                    {profile.name}
                    <br />
                    {profile.role}
                </figcaption>
            </figure>
        </article>
    );
};

export default ReviewCard;
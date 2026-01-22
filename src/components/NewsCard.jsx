import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FiShare2, FiBookmark } from "react-icons/fi";
import { HiOutlineEye } from "react-icons/hi";

const formatDate = (iso) => {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
};

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

/**
 * Usage:
 * <NewsCard news={data} onReadMore={(id)=>navigate(`/news/${id}`)} />
 */
export default function NewsCard({ news}) {
  const {
   
    title,
    details,
    total_view,
    rating,
    author,
    thumbnail_url,
    
    // others,
  } = news || {};

  const ratingNumber = clamp(Number(rating?.number ?? 0), 0, 5);

  return (
    <div className="card bg-base-100 shadow-md border border-base-200 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 p-4 bg-base-200/60">
        <div className="flex items-center gap-3 min-w-0">
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-base-300 ring-offset-base-100 ring-offset-2">
              <img
                src={author?.img}
                alt={author?.name || "Author"}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="min-w-0">
            <p className="font-semibold leading-tight truncate">
              {author?.name || "Unknown Author"}
            </p>
            <p className="text-sm opacity-70">{formatDate(author?.published_date)}</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button className="btn btn-ghost btn-sm" aria-label="Bookmark">
            <FiBookmark className="text-lg" />
          </button>
          <button className="btn btn-ghost btn-sm" aria-label="Share">
            <FiShare2 className="text-lg" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <h2 className="text-xl font-bold leading-snug">{title}</h2>

        <div className="mt-3">
          <img
            src={thumbnail_url}
            alt={title || "News thumbnail"}
            className="w-full h-56 object-cover rounded-xl"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>

       

        {/* Details snippet */}
      <div className="mt-3 text-base opacity-80 line-clamp-3">
{
    details.length > 200 ?(
        <>
        {
            details.slice(0,200)
        }....  <span className="text-primary hover:underline cursor-pointer font-semibold">Read More</span>
        </>
    ):(
        details
    )
}
      </div>

        {/* Footer row */}
        <div className="mt-5 flex items-center justify-between gap-3">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <AiFillStar
                  key={i}
                  className={i < ratingNumber ? "opacity-100" : "opacity-30"}
                />
              ))}
            </div>
            <span className="text-sm font-medium opacity-80">{ratingNumber.toFixed(1)}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 opacity-80">
            <HiOutlineEye className="text-lg" />
            <span className="text-sm font-medium">{total_view ?? 0}</span>
          </div>
        </div>

        {/* Read more */}
     
      </div>
    </div>
  );
}

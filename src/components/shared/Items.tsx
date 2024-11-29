import CategoryItem from "./CategoryItem";

let array = [
  {
    type: "A555",
    price: "2500$",
    image:
      "https://s3-alpha-sig.figma.com/img/0dbb/dd12/c53c9da860c6163bb6e7f2a818501b1a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ENv9FtqPcE89wssR5n~~PJmRCqOtNy9obP1wIwpCgneARsdFdc7BWIZHBUIJpjrChF3tj1mvChVK5yPUmYGag-hXOURJrPQXlAq2wFIOB3R2p50QZc6mzI2Lwtsz0zHUUCCzDR2UJaj85TZWoMnr6JJNBmXngGFwVPfAZ49qUnpw7l1p-OhEo9LLRZ9GzpS9JbV09UzYBE07tf7IuXq64QOYX45MgAgdlA8WRSZ6ziGHA~TWy-LUDvhHkfbRYu2bur1aSrlVFFJ3u59SD3hOgvGSPe9o4zhIS77sgjsqp0ZBBMYwEKvIKTllX094cpVLKMvWZLA0IFY5OEbainwISA__",
  },
  {
    type: "A555",
    price: "2500$",
    image:
      "https://s3-alpha-sig.figma.com/img/0dbb/dd12/c53c9da860c6163bb6e7f2a818501b1a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ENv9FtqPcE89wssR5n~~PJmRCqOtNy9obP1wIwpCgneARsdFdc7BWIZHBUIJpjrChF3tj1mvChVK5yPUmYGag-hXOURJrPQXlAq2wFIOB3R2p50QZc6mzI2Lwtsz0zHUUCCzDR2UJaj85TZWoMnr6JJNBmXngGFwVPfAZ49qUnpw7l1p-OhEo9LLRZ9GzpS9JbV09UzYBE07tf7IuXq64QOYX45MgAgdlA8WRSZ6ziGHA~TWy-LUDvhHkfbRYu2bur1aSrlVFFJ3u59SD3hOgvGSPe9o4zhIS77sgjsqp0ZBBMYwEKvIKTllX094cpVLKMvWZLA0IFY5OEbainwISA__",
  },
  {
    type: "A555",
    price: "2500$",
    image:
      "https://s3-alpha-sig.figma.com/img/0dbb/dd12/c53c9da860c6163bb6e7f2a818501b1a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ENv9FtqPcE89wssR5n~~PJmRCqOtNy9obP1wIwpCgneARsdFdc7BWIZHBUIJpjrChF3tj1mvChVK5yPUmYGag-hXOURJrPQXlAq2wFIOB3R2p50QZc6mzI2Lwtsz0zHUUCCzDR2UJaj85TZWoMnr6JJNBmXngGFwVPfAZ49qUnpw7l1p-OhEo9LLRZ9GzpS9JbV09UzYBE07tf7IuXq64QOYX45MgAgdlA8WRSZ6ziGHA~TWy-LUDvhHkfbRYu2bur1aSrlVFFJ3u59SD3hOgvGSPe9o4zhIS77sgjsqp0ZBBMYwEKvIKTllX094cpVLKMvWZLA0IFY5OEbainwISA__",
  },
  {
    type: "A555",
    price: "2500$",
    image:
      "https://s3-alpha-sig.figma.com/img/0dbb/dd12/c53c9da860c6163bb6e7f2a818501b1a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ENv9FtqPcE89wssR5n~~PJmRCqOtNy9obP1wIwpCgneARsdFdc7BWIZHBUIJpjrChF3tj1mvChVK5yPUmYGag-hXOURJrPQXlAq2wFIOB3R2p50QZc6mzI2Lwtsz0zHUUCCzDR2UJaj85TZWoMnr6JJNBmXngGFwVPfAZ49qUnpw7l1p-OhEo9LLRZ9GzpS9JbV09UzYBE07tf7IuXq64QOYX45MgAgdlA8WRSZ6ziGHA~TWy-LUDvhHkfbRYu2bur1aSrlVFFJ3u59SD3hOgvGSPe9o4zhIS77sgjsqp0ZBBMYwEKvIKTllX094cpVLKMvWZLA0IFY5OEbainwISA__",
  },
  {
    type: "A555",
    price: "2500$",
    image:
      "https://s3-alpha-sig.figma.com/img/0dbb/dd12/c53c9da860c6163bb6e7f2a818501b1a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ENv9FtqPcE89wssR5n~~PJmRCqOtNy9obP1wIwpCgneARsdFdc7BWIZHBUIJpjrChF3tj1mvChVK5yPUmYGag-hXOURJrPQXlAq2wFIOB3R2p50QZc6mzI2Lwtsz0zHUUCCzDR2UJaj85TZWoMnr6JJNBmXngGFwVPfAZ49qUnpw7l1p-OhEo9LLRZ9GzpS9JbV09UzYBE07tf7IuXq64QOYX45MgAgdlA8WRSZ6ziGHA~TWy-LUDvhHkfbRYu2bur1aSrlVFFJ3u59SD3hOgvGSPe9o4zhIS77sgjsqp0ZBBMYwEKvIKTllX094cpVLKMvWZLA0IFY5OEbainwISA__",
  },
  {
    type: "A555",
    price: "2500$",
    image:
      "https://s3-alpha-sig.figma.com/img/0dbb/dd12/c53c9da860c6163bb6e7f2a818501b1a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ENv9FtqPcE89wssR5n~~PJmRCqOtNy9obP1wIwpCgneARsdFdc7BWIZHBUIJpjrChF3tj1mvChVK5yPUmYGag-hXOURJrPQXlAq2wFIOB3R2p50QZc6mzI2Lwtsz0zHUUCCzDR2UJaj85TZWoMnr6JJNBmXngGFwVPfAZ49qUnpw7l1p-OhEo9LLRZ9GzpS9JbV09UzYBE07tf7IuXq64QOYX45MgAgdlA8WRSZ6ziGHA~TWy-LUDvhHkfbRYu2bur1aSrlVFFJ3u59SD3hOgvGSPe9o4zhIS77sgjsqp0ZBBMYwEKvIKTllX094cpVLKMvWZLA0IFY5OEbainwISA__",
  },
  {
    type: "A555",
    price: "2500$",
    image:
      "https://s3-alpha-sig.figma.com/img/0dbb/dd12/c53c9da860c6163bb6e7f2a818501b1a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ENv9FtqPcE89wssR5n~~PJmRCqOtNy9obP1wIwpCgneARsdFdc7BWIZHBUIJpjrChF3tj1mvChVK5yPUmYGag-hXOURJrPQXlAq2wFIOB3R2p50QZc6mzI2Lwtsz0zHUUCCzDR2UJaj85TZWoMnr6JJNBmXngGFwVPfAZ49qUnpw7l1p-OhEo9LLRZ9GzpS9JbV09UzYBE07tf7IuXq64QOYX45MgAgdlA8WRSZ6ziGHA~TWy-LUDvhHkfbRYu2bur1aSrlVFFJ3u59SD3hOgvGSPe9o4zhIS77sgjsqp0ZBBMYwEKvIKTllX094cpVLKMvWZLA0IFY5OEbainwISA__",
  },
  {
    type: "A555",
    price: "2500$",
    image:
      "https://s3-alpha-sig.figma.com/img/0dbb/dd12/c53c9da860c6163bb6e7f2a818501b1a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ENv9FtqPcE89wssR5n~~PJmRCqOtNy9obP1wIwpCgneARsdFdc7BWIZHBUIJpjrChF3tj1mvChVK5yPUmYGag-hXOURJrPQXlAq2wFIOB3R2p50QZc6mzI2Lwtsz0zHUUCCzDR2UJaj85TZWoMnr6JJNBmXngGFwVPfAZ49qUnpw7l1p-OhEo9LLRZ9GzpS9JbV09UzYBE07tf7IuXq64QOYX45MgAgdlA8WRSZ6ziGHA~TWy-LUDvhHkfbRYu2bur1aSrlVFFJ3u59SD3hOgvGSPe9o4zhIS77sgjsqp0ZBBMYwEKvIKTllX094cpVLKMvWZLA0IFY5OEbainwISA__",
  },
  {
    type: "A555",
    price: "2500$",
    image:
      "https://s3-alpha-sig.figma.com/img/0dbb/dd12/c53c9da860c6163bb6e7f2a818501b1a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ENv9FtqPcE89wssR5n~~PJmRCqOtNy9obP1wIwpCgneARsdFdc7BWIZHBUIJpjrChF3tj1mvChVK5yPUmYGag-hXOURJrPQXlAq2wFIOB3R2p50QZc6mzI2Lwtsz0zHUUCCzDR2UJaj85TZWoMnr6JJNBmXngGFwVPfAZ49qUnpw7l1p-OhEo9LLRZ9GzpS9JbV09UzYBE07tf7IuXq64QOYX45MgAgdlA8WRSZ6ziGHA~TWy-LUDvhHkfbRYu2bur1aSrlVFFJ3u59SD3hOgvGSPe9o4zhIS77sgjsqp0ZBBMYwEKvIKTllX094cpVLKMvWZLA0IFY5OEbainwISA__",
  },
];

// @ts-ignore
const Items = () => {
  return (
    <div className="py-1 flex gap-5 flex-wrap mt-5">
      {array.map((item) => (
        <CategoryItem item={item} />
      ))}
    </div>
  );
};

export default Items;

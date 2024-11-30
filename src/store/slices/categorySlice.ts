import { Category, CategoryInitState } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CategoryInitState = {
  categories: [
    {
      title: "Кольцo",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/638b/7343/2169bc996fbc132a2803e5ae33b8c623?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZdIoIoWPLGAmsPGvdhvjf1CVqJopn8N75AMrHiw06XnOeFuJKilBIv-8cYu-mWCKmQ8wdycpFfa4IhXbVynU43l9BHXUJCmWmGLkJFu-CWQZu0xBPTgALVAm2fnvldYfjMpn3ANTRcKQQclwfPzIyMOJ2p4WpMe-80PtfKyY6iRW7MYyoAzbnxgnTsEeEJZtOYetqU380igtmK9d9DOepzXInQRZMaaOvS1T0eWLmSWO92QFDjS~yl6UHYgmwzjxCvk43vBF8AsHpNMhcZBYtvZDJqyGSAwS6P7t5KCqGYP4Rffqd~LdQ3G6rFX9bSZY86TAl3Wi-YONjY7ZU0nRXg__",
      gender: "woman",
      results: [
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
      ],
    },
    {
      title: "Колье",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/ce25/ec11/394cd24f19ef3e7f424485f2d72dfe93?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mFli6tYP4VCEEHfOG1o9JSsotbXJxDpduhnXmxB4fDhssSYnQ7JyX2AHh6viWzBb~pRTraoMtTSMAxRBKtN6zO1rfowqm~PCNUWmjDjCKYA-27BsR2myNnlUrmxAI2wMgZahDUmvnGu3~2vG7hWeppNTnBxYq1IVtj71XWHKNlWa0L3l~JIgfpriP17G5WF1VRml1Fs7MDYBijajxqQAZHe2511eidXxP5OEnvIP9QiTFK3iqSQduEPJ~SRbxxazQWbFRkQPspw6gyYBqLXXedE6Un7k89LOhGbyIQGjA1nzA0Pr-lr3vdeJiHbTfy1q2H7kjpUMHGS2-NdqnRRzMQ__",
      gender: "woman",
      results: [
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
      ],
    },
    {
      title: "Серьги",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/ba5b/18ab/9218a07042f535716936c769a6b59d4c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KRnVp-EfIZUl2VbcygEkWO0j-xUkLTSkgcoyygMUdZZQapXeKVpRy7lbRzG-KIZdjlnz5Ixl--8RXpqBklXF47FYwr1biisHGowx7mOoJaYfm7yifSoJoDxPgk4Z-jGC7axyYNVH2B9ok6SsjHNw7sj89zVUns60sAAdMGXDiNyxsjtLVual4faqVSyDLl5ziZq5KsWuNvUGOznhu9Bwn10z3SAy7oMlPS0cagy7tznTKHkbnqOUT1XXFgtbH-SpeaiecnA0B7Rj70blQK6YRYPsimetpX0ibXl5PZFqlebtFB4U5TMTQUGGWFiCBMGNobTn3qJe-eTHg6sW7i~mlw__",
      gender: "woman",
      results: [
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
      ],
    },
    {
      title: "Цепь",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/0055/3573/dcd8b156ab4fdf9c6c4d30a36f9c0f5f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fzOkiRUBzaJ7qhMGLXZRBIU8k8-DOWcS7SaErFwkBFZIVvrST~L-FOTDcz5hgg5tOPMnDV4hjyHsH23fgdpSK2hugG5gctHrB4brQ0d8ah67fSYriRjyxz~Way2qVLzkOu7CbXudxMqWYMF2RnpEF56FnsYNul3M~VPKnHe2pOSc~eBomNy5RP09Wj02pu0mvo~t-EIgQFY-GIpmCupdJy2yrOLjJdW7yClB9Lv2C~QT0d7gDsbzmh4Z011t76VHPun0IF2FHsOWfZ7LJJIFFf1cY4bqwTY~q1q5gKHzZBiuSe4JvVLIh0gKCXvfeV687rm-fbE9embR~59W9yQUmA__",
      gender: "woman",
      results: [
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
      ],
    },
    {
      title: "Брошь",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/b7c7/3d16/f1ec6db0ddb9c0054fd7970ef2b083d9?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WCXR9z~SSUilInD~OW5fxQPqocU~2OV7eV9L8J8inO3INFfeMuo-0u8TY3CthzKmT0L4gMqA0V7pwnBFASi3QVISfunWvWEILS8ybDxytlJbqWf3cRJGc6AwVrsFvod-g7jEK7~sRnfiTzCXlyP67VhLKbg-z8tsbaS-RUtzOhhFpkYq4gnnIJT1m3lDO-xeUd3IgOLMZ3FcGV0m5oZyb1VJxnbS44VQgdQRPTq7V72jnKCVmwb4vhLOBG74xgUgviEM71P2KPtYOpzprNv4~~3wqsYK34oGvlAijZE3hoaHit6-~~Fjp70l5JDqPj743yKoLvT3TCWdbbsTc6sewA__",
      gender: "woman",
      results: [
        {
          type: "A555",
          price: "2500$",
          image:
            "https://s3-alpha-sig.figma.com/img/0dbb/dd12/c53c9da860c6163bb6e7f2a818501b1a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ENv9FtqPcE89wssR5n~~PJmRCqOtNy9obP1wIwpCgneARsdFdc7BWIZHBUIJpjrChF3tj1mvChVK5yPUmYGag-hXOURJrPQXlAq2wFIOB3R2p50QZc6mzI2Lwtsz0zHUUCCzDR2UJaj85TZWoMnr6JJNBmXngGFwVPfAZ49qUnpw7l1p-OhEo9LLRZ9GzpS9JbV09UzYBE07tf7IuXq64QOYX45MgAgdlA8WRSZ6ziGHA~TWy-LUDvhHkfbRYu2bur1aSrlVFFJ3u59SD3hOgvGSPe9o4zhIS77sgjsqp0ZBBMYwEKvIKTllX094cpVLKMvWZLA0IFY5OEbainwISA__",
        },
      ],
    },
    {
      title: "Кулоны",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/9ecc/98a0/d155b5304d155e853cb07a7fe6f08629?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AYfWUq0t7UnBFEYRMtrlMl1Bawl8y82l~jqKoLwbZMCPHEz5KhPo28pSc1zD46Q8fJZAhTfD~1M~p9ltWiGbfjyKenpW5Ew18SrzdvOUQ8Xn5M9igCGYN6--rsgPY4YGqift23n5V4VXPwrjKq6ef8WnvNCCW8Q9j4Kxu70z5BEtL5ZzjhumYnOvUJ7gbTAWCT5hAykTnhpv~LzB7oOTedPncNeix6uxDcKGlLXQuL13jRDzIeFkdTR~sZzIKU-tzmDLlMVyQOiPBsvDOGD85QA0iaDFsAAqhS5fyTUXVJ95aTvWKlSrvR2uZUBKp2dd6o4qECdyp5-tLMPSUPgrbA__",
      gender: "woman",
      results: [
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
      ],
    },
    {
      title: "Браслеты",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/630e/6d75/9d45fb9934d3030c919893fe93edc95b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MdKdGFOWQanfk9vdxpUu1Q2Vbf-Of0AiKr2g2IuDbM70~n5THQVPz3vD6RA0o6J5J2x5UiQpL9bm5Yzgd-Z775aBpMK3RmHrt9xAvhbUcS7AyU1uarlbyIuvxWQdCKxlewsgt1OfuTQ-NbakmdpiFcZ2A2VCPVT2nPB7UhPO2EDY5MDbYUfC-NUrFOmSMQ-D16hrEnc0IcCnMNW5XPWjtQoSM6XKSXs1~IcsZUpefVdyBn5wAGDGXYiDf0yCy9hl8XheJrOUEn4t~EpM4UizUVKug3zb5zRweGuEVHtMdf8i8iDZtA0VLcdOJOP4OdyKe~q69nxpV1k0UntryR3zxw__",
      gender: "woman",
      results: [
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
      ],
    },
  ],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory(state, action: PayloadAction<Category>) {
      state.categories = [...state.categories, action.payload];
    },
  },
});

export default categorySlice.reducer;

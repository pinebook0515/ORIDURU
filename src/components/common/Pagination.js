import Link from "next/link";
import styles from "@/styles/common/pagination.module.scss";

const Pagination = ({ pathName, maxPageNumber, currentPageNumber }) => {
  const prevPage = currentPageNumber - 1;
  const nextPage = currentPageNumber + 1;

  return (
    <div className={`${styles.pager}`}>
      {currentPageNumber !== 1 && (
        <Link href={`/${pathName}/page/${prevPage}`}>
          <a data-testid="previous" className={`${styles.pager_prev}`}>
            Prev
          </a>
        </Link>
      )}
      {currentPageNumber !== maxPageNumber && (
        <Link href={`/${pathName}/page/${nextPage}`}>
          <a data-testid="next" className={`${styles.pager_next}`}>
            Next
          </a>
        </Link>
      )}
    </div>
  );
};

export default Pagination;

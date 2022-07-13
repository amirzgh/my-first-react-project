import styles from './Pagination.module.css'

const Pagination = ({pageParam, onChange, ...props}) => {
    const pagesOption = [15, 16, 20];
    const pages = [pageParam.page];

    if (pages[0] === 1 && pageParam.totalPages > 1) {
        pages.push(2)
        if (pageParam.totalPages > 2) {
            pages.push('...')
        }
        pages.push(pageParam.totalPages)
    }
    if (pages[0] > 1) {
        pages.unshift(1)
        if (pageParam.page > 2) {
            pages.splice(1, 0, '...')
        }
        if (pageParam.page < pageParam.totalPages - 1) {
            pages.push('...')
        }
        if (pageParam.page !== pageParam.totalPages) {
            pages.push(pageParam.totalPages)

        }
    }

    const onPageChange = (page) => {
        if (typeof page !== 'number') {
            return
        }
        onChange({
            page
        })
    }

    return (
        <div className={styles.pagination_container}>
            <div className={styles.pagination}>

                <div disabled={pageParam.page === 1} className={styles.pagination_item} onClick={() => {
                    onPageChange(1)
                }}>&gt;&gt;</div>

                <div disabled={pageParam.page === 1} className={styles.pagination_item} onClick={() => {
                    onPageChange(pageParam.page - 1)
                }}>&gt;</div>

                {pages.map((page,index) => <div onClick={() => onPageChange(page)} className={`${styles.pagination_item} ${page === pageParam.page ? styles.current : ''} ${page === '...' ? styles.dots : ''}`} key={index} >{page}</div>)}
                

                <div disabled={pageParam.page === pageParam.totalPages} className={styles.pagination_item} onClick={() => {
                    onPageChange(pageParam.page + 1)
                }}  >&lt;</div>

                <div disabled={pageParam.page === pageParam.totalPages} className={styles.pagination_item} onClick={() => {
                    onPageChange(pageParam.totalPages)
                }}  >&lt;&lt;</div>


            </div>
            <div className={styles.showPerPageInput}>
                <select className={styles.select_pages} name="rows" id="rows" onChange={
                    (event) => {
                        event.persist()
                        onChange({ rows: event.target.value })
                    }
                }>
                    <option value={15}>انتخاب کنید</option>
                    {
                        pagesOption.map(option =>
                            <option value={option} key={option} >{option}</option>
                        )
                    }
                </select>
            </div>
        </div>
    );
}

export default Pagination;
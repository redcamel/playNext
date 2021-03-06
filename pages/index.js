import Link from 'next/link'
class Index extends React.Component {

    constructor(props) {
        super(props);

        // 아래놈을 기본 베이스 객체에 넣어두고 확장해서 써야겠음 -_-
        if (typeof window !== 'undefined' && !window['Rich']) {
            window['Rich'] = require('./Rich.min.mjs').default
            console.log(Rich)
            console.log(Rich.Dom('div'))
            console.log(Rich.Dom('div').S('html', '들어왔냐', '<', 'body'))
        }

        if (typeof window !== 'undefined' && window['Rich']) {
            if (window['Rich']) Rich.WIN.clear()
            if (window['Rich']) Rich.LOOPER.delAll()

        }

    }

    componentDidMount() {
        let HD_Resize = e => {
            console.log('인덱스에서 리사이즈를 실행했어', e)
        }
        Rich.WIN.add('인덱스리사이즈', HD_Resize)
        HD_Resize()
        Rich.LOOPER.addMainLoop('test', time=> {
            // console.log('index에서 루프테스트' + time)
        })
    }

    render() {
        return (
            <div>
                <Link href="/about">
                    go about
                </Link>
            </div>
        );
    }
}
// Index.getInitialProps = async function() {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//     const data = await res.json();
//
//     console.log(`Show data fetched. Count: ${data.length}`);
//
//     return {
//         shows: data.map(entry => entry.show)
//     };
// };
Index.prototype.test = function () {
    console.log('test')
}
export default Index
import Link from "next/link";


export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.refBox

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
            console.log('어바웃에서 리사이즈를 실행했어', e)
            Rich.Dom(this.refBox).S('html', `w : ${Rich.WIN.w} / h : ${Rich.WIN.h}`)
        }
        Rich.WIN.add('어바웃리사이즈', HD_Resize)
        HD_Resize()
        Rich.LOOPER.addMainLoop('test', time => {
            if (this.refBox) Rich.Dom(this.refBox).S(
                'transform', `translate(${100 * Math.sin(time / 500)}px,${100 * Math.cos(time / 500)}px)`
            )
            console.log('about에서 루프테스트' + time)
        })
    }

    render() {


        return (
            <div>
                <Link href="/index">
                    <a>index</a>
                </Link>
                <div ref={v => {
                    this.refBox = v
                }}/>
            </div>
        )
    }
}
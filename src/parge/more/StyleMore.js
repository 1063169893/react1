import styled from 'styled-components'


const MoreBox=styled.ul`
    width:100%;
    height:max-content;
`

const MoreSeekLiBox=styled.li`
    padding: .1rem .2rem .1rem .1rem;
    margin: .1rem .08rem;
    background-color: #fff;
    border-radius: .03rem;
    box-shadow: 0 2px 0 #dedede;
    position: relative;
    a{
        position: relative;
        color:#000;
        display:block;
    }
`

const HeaderTopBox=styled.p`
    font-size: .16rem;
    color: #333;
    margin-bottom: .07rem;
`
const CompanyNameBox=styled.p`
    font-size: .14rem;
    color: #999;
    line-height: .18rem;
    margin-bottom: .05rem;

`

const TreatmentListBox=styled.div`
    padding-right: .15rem;
    display:flex;
    flex-wrap:wrap;
    .colorred{
        display: inline-block;
        height: .18rem;
        line-height: .18rem;
        border-radius: .03rem;
        padding: 0 .03rem;
        font-size: .14rem;
        margin-bottom: .05rem;
        background-color: #f69a2e;
        color: #fff;
        margin-right:.03rem;
    }
`
const SpanTextBox=styled.span`
    display: inline-block;
    height: .18rem;
    line-height: .18rem;
    color: #fafafa;
    background-color: #cbd8e6;
    border-radius: .03rem;
    padding: 0 .03rem;
    font-size: .14rem;
    margin-bottom: .05rem;
`
const EmImage=styled.em`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:.29rem;
    height:.3rem;
    background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA7CAYAAAAq55mNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZTI5NWRhOC1iMjI2LTQyMDYtYmMxZC1jMWY5N2YyOWQyOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTY3NjA3MUEyMzMyMTFFNzhDQkE4MkM0NjBEREQ2NkMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTY3NjA3MTkyMzMyMTFFNzhDQkE4MkM0NjBEREQ2NkMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0YmJiNTljMS02MGRjLTQzNmEtOTIzYS00ZTA3ZDI4MzZmNjYiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjMDYyNmRjMy00ZmJlLTExN2EtYTFm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') no-repeat;
    background-size: 100% auto;
`
export {
    MoreBox,
    MoreSeekLiBox,
    HeaderTopBox,
    CompanyNameBox,
    TreatmentListBox,
    SpanTextBox,
    EmImage
}
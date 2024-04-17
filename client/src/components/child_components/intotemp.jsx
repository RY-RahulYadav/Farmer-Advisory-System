import { Link } from "react-router-dom"

function IntoTemp(props) {
    return (
        <div className="aboutbox">
            <section id="sp-section-3">
                <div class="row">
                    <div id="sp-title" class="col-lg-12 "><div class="sp-column "><div class="sp-page-title" style={{ backgroundcolor: "", backgroundImage: "url(https://scx2.b-cdn.net/gfx/news/hires/2022/leaf.jpg)" }}><div class="container"><h2 class="sp-page-title-heading">{props.service}</h2><h3 class="sp-page-title-sub-heading">Servi</h3>
                        <ol itemscope="" itemtype="https://schema.org/BreadcrumbList" class="breadcrumb">
                            <li class="float-start">
                                <span class="divider fas fa-map-marker-alt" aria-hidden="true"></span>
                            </li>
                            <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem" class=""><Link itemprop="item" to="/" class="pathway"><span itemprop="name">home</span><span className="slash">/</span></Link> 
                            </li>
                           {props.no==3&& <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem" class="">
                            </li>}
                            <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem" class="breadcrumb-item active"><span itemprop="name">{props.url}</span><span className="slash">/</span> 
                            </li>
                        </ol>
                    </div></div></div></div></div>
            </section></div>
    )
}

export default IntoTemp
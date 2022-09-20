import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem, Table } from 'reactstrap';
import './ProductDetailTab.css';

const ProductDetailDesc = () => {
    return (
        <div style={{ backgroundColor: 'white', marginTop: '30px' }}>
            <div className="p-5 ">
                <h2 style={{ fontSize: '3rem' }}>Chi Tiết Sản Phẩm:</h2>
                <Table borderless>
                    <tbody>
                        <tr>
                            <th scope="row" className="col-2">
                                Cân Nặng, g
                            </th>
                            <td className="col-10">400</td>
                        </tr>
                        <tr>
                            <th scope="row">Chiều dài, cm </th>
                            <td>10 </td>
                        </tr>
                        <tr>
                            <th scope="row">Chiều Rộng, cm</th>
                            <td>10 </td>
                        </tr>
                        <tr>
                            <th scope="row">Chiều Cao, cm</th>
                            <td>20 </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="px-5 pb-5">
                <h2 style={{ fontSize: '3rem' }}>Mô Tả Sản Phẩm:</h2>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
                    mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                    interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class
                    aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent
                    auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac
                    rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet
                    lacinia. Aliquam in elementum Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
                    quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse
                    quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
                    porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend.
                    Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante
                    dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere Nam
                    pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi
                    nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed
                    vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam
                    ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat
                    sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante,
                    varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam
                    pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris
                    consequat tellus id tempus .
                </div>
            </div>
        </div>
    );
};

export default ProductDetailDesc;

import logo from './logo.svg';
import './App.css';
import React from 'react';
class App extends React.Component {
  render(){
  return (
    <div className="App">
      <div class="page-body">
        <input type="text" id="menujson" value="@ViewBag.Menu" hidden/>
        <div class="row">
            <div class="col-md-6">
                <div class="card mb-3">
                    <div class="card-header">
                        <h5 class="float-left">Menu</h5>
                        <div class="float-right">
                            <button id="btnReload" type="button" class="btn btn-outline-secondary">
                                <i class="fa fa-play"></i> Áp dụng Menu
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
                        <ul id="myEditor" class="sortableLists list-group"></ul>
                    </div>
                </div>

            </div>
            <div class="col-md-6">
                <div class="card border-primary mb-3">
                    <div class="card-header bg-primary text-white">Sửa menu con</div>
                    <div class="card-body">
                        <form id="frmEdit">
                            <div class="form-group" id=" textinput">

                                <label for="text">Hiển thị</label>
                                <div class="input-group row">
                                    <input type="text" class="form-control item-menu" name="text" id="text"
                                        placeholder="Tên"/>
                                    <div class="input-group-append">
                                        <button type="button" id="myEditor_icon"
                                            class="btn btn-outline-secondary iconpicker dropdown-toggle"><i
                                                class="empty"></i></button><input type="hidden" value="empty"/>

                                    </div>
                                </div>
                                <input type="hidden" name="icon" class="item-menu"/>
                            </div>
                            <div class="form-group">
                                <label for="href">URL</label>
                                <input type="text" class="form-control item-menu" id="href" name="href"
                                    placeholder="URL"/>
                            </div>
                            <div class="form-group">
                                <label for="target">Target</label>
                                <select name="target" id="target" class="form-control item-menu">
                                    <option value="_self">Self</option>
                                    <option value="_blank">Blank</option>
                                    <option value="_top">Top</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="title">Mô tả</label>
                                <input type="text" name="title" class="form-control item-menu" id="title"
                                    placeholder="Mô tả giao diện"/>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer">
                        <button type="button" id="btnUpdate" class="btn btn-primary" disabled="disabled"><i
                                class="fas fa-sync-alt"></i> Cập nhật</button>
                        <button type="button" id="btnAdd" class="btn btn-success"><i class="fas fa-plus"></i> Thêm
                            mới</button>
                    </div>
                </div>

            </div>
        </div>
        @*<p>Click the Output button to execute the function <code>getString();</code></p>
        <div class="card">
            <div class="card-header">
                JSON Output
                <div class="float-right">
                    <button id="btnOutput" type="button" class="btn btn-success"><i class="fas fa-check-square"></i>
                        Output</button>
                </div>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <textarea id="out" class="form-control" cols="50" rows="10"></textarea>
                </div>
            </div>
        </div>
    </div>
    </div>
    
  );
}
}

export default App;

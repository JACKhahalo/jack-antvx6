<template>
  <div class="header-container">
    <div class="left-area">
      <el-button
        @click="emits('leftChange')"
        :icon="props.left ? CaretLeft : CaretRight"
      ></el-button>
    </div>
    <div class="right-area">
      <el-button @click="exportSvg">导出</el-button>
      <el-button @click="exportJSON">导出json</el-button>

      <el-button @click="importData">导入</el-button>

      <el-button @click="dialogVisible = true">导入svg</el-button>

      <el-button
        @click="emits('rightChange')"
        :icon="props.right ? CaretRight : CaretLeft"
      ></el-button>
    </div>
  </div>
  <el-dialog v-model="dialogVisible" title="Tips" width="80%">
    <div class="main">
      <div class="head">文件上传</div>
      <div class="body">
        <span>上传后的目录</span>
        <input id="file-path" value="/home/cloudpss/sources/files" />
        <input type="file" id="file" multiple="true" />
        <button class="btn" @click="uploadFile()">上传</button>
      </div>
      <div class="foot">
        <div class="show">
          <div>上传成功文件：</div>
          <ul id="success"></ul>
        </div>
      </div>
      <div>
        执行命令
        <textarea
          type=""
          id="command"
          name="command"
          rows="3"
          cols="70"
        ></textarea>
        <input type="submit" value="Submit" @click="acction()" />
        <input type="submit" value="clear" @click="clear()" />
      </div>
      <div class="result">
        <div>执行结果：</div>
        <textarea id="result" rows="25" cols="200"></textarea>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { CaretLeft, CaretRight } from '@element-plus/icons-vue';
import { defineEmits, defineProps, ref } from 'vue';
import { grahpStore } from '../../../pinia/graph';
import { Graph } from '@antv/x6';
import models from './models/index';
import edgeModels from './models/edge';
import * as json1 from './models/test3.json';
import adapter from './models/adapter';
const dialogVisible = ref(false);

const store = grahpStore();
const graph: Graph = store.currentGraph as unknown as Graph;
const emits = defineEmits(['leftChange', 'rightChange']);
const props = defineProps(['left', 'right']);

const exportSvg = () => {
  graph.exportSVG();
};

const res1 = adapter(json1);

console.log(res1, 'json');

models.forEach((item) => {
  console.log(item);
  Graph.registerNode(item.name, item.settings, true);
});

edgeModels.forEach((item) => {
  Graph.registerEdge(item.name, item.settings, true);
});

Graph.registerNode(
  'diagram-component',
  {
    inherit: 'rect', // 继承于 rect 节点
    width: 100,
    height: 40,
    markup: [
      {
        tagName: 'rect', // 标签名称
        selector: 'body', // 选择器
      },
      {
        tagName: 'text',
        selector: 'label',
      },
    ],
    attrs: {
      body: {
        stroke: '#8f8f8f',
        strokeWidth: 1,
        fill: '#fff',
        rx: 6,
        ry: 6,
      },
    },
  },
  true
);

Graph.registerEdge('diagram-component-edge', {
  inherit: 'edge',
  markup: [
    {
      tagName: 'path',
      selector: 'outline',
      attrs: {
        fill: 'none',
      },
    },
    {
      tagName: 'path',
      selector: 'line',
      attrs: {
        fill: 'none',
        cursor: 'pointer',
      },
    },
  ],
  attrs: {
    line: {
      connection: true,
      stroke: '#dddddd',
      strokeWidth: 4,
      strokeLinejoin: 'round',
      targetMarker: {
        tagName: 'path',
        stroke: '#000000',
        d: 'M 10 -3 10 -10 -2 0 10 10 10 3',
      },
    },
    outline: {
      connection: true,
      stroke: '#000000',
      strokeWidth: 6,
      strokeLinejoin: 'round',
    },
  },
});

const importData = () => {
  console.log('导入');
  graph.fromJSON(res1);
};
const exportJSON = () => {
  console.log('导出', graph.toJSON());
  graph.toJSON();
};
//

// const url = `http://${location.hostname}:13387/api/upload-topology-server`;
const url = `http://${location.hostname}:13387`;
let fail: any;
let command: any;
let resultMessage = '';
function clear() {
  resultMessage = '';
  fail.value = resultMessage;
}
document.onkeydown = (e) => {
  if (e.ctrlKey && e.keyCode === 13) {
    acction();
    return false;
  }
};
function acction() {
  command = document.getElementById('command').value;
  fail = document.getElementById('result');
  // fetch('/api/upload-topology-server/process_post',{
  fetch(`${url}/process_post`, {
    method: 'POST',
    body: JSON.stringify({ command }),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    },
  }).then((res) => {
    console.log(res);
    res.json().then((r) => {
      console.log(r);
      resultMessage += '当前命令： ';
      resultMessage += command + '\n';
      resultMessage += '执行结果： ';
      if (r.msg === 'error') {
        resultMessage += r.stack + '\n';
      } else {
        resultMessage += r.message + '\n';
      }
      fail.value = resultMessage;
    });
  });
}
function uploadFile() {
  let success = document.getElementById('success');

  let fileList = document.getElementById('file').files;
  let filePath = document.getElementById('file-path').value;

  var xhr = new XMLHttpRequest();
  xhr.open('POST', `${url}/file_upload`);
  const formData = new FormData();
  formData.append('file-path', filePath);
  for (let i = 0; i < fileList.length; i++) {
    formData.append('file', fileList[i]);
  }
  xhr.send(formData);
  let res = {};
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      res = JSON.parse(xhr.responseText);
      console.log(res);
      if (res.data) {
        console.log(res.data);
        res.data.map((item) => {
          let li = document.createElement('li');
          let text = document.createTextNode(item.originalname);
          li.appendChild(text);
          success.appendChild(li);
        });
      } else {
        alert(res.msg);
      }
    }
  };
}

const importSvgData = () => {};
</script>
<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.left-area {
}
.right-area {
}
/* * {
  padding: 0;
  margin: 0 auto;
} */
.main {
  background-color: rgba(0, 0, 0, 0.01);
  width: 1260px;
  height: 100vh;
}
.head {
  height: 50px;
  padding: 20px 0;
  font-size: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.body {
  padding: 20px 0;
}
.btn {
  margin-right: 50px;
  width: 150px;
  height: 40px;
  border-radius: 10px;
}
.foot {
  padding: 20px 0;
}
.show {
  height: 100px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  border-radius: 10px;
}
.result {
  height: 100px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  border-radius: 10px;
}
ul {
  list-style: none;
  padding: 20px 30px;
}
li {
  margin: 5px;
}
</style>

export default async function handler(req, res) {
    const cloudName = "dle2ofe3t";
    const apiKey = "917473381673867";
    const apiSecret = "Z-kvpDabgfuYoVFB1U3ImFomsfM";
    const tagName = req.query.tag || '040301'; // 从查询参数获取标签名，默认为 040301

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/tags/${tagName}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + Buffer.from(apiKey + ':' + apiSecret).toString('base64'),
            }
        });

        if (response.ok) {
            const data = await response.json();
            res.status(200).json(data); // 将 Cloudinary 响应返回给前端
        } else {
            res.status(response.status).json({ error: `请求失败，状态码: ${response.status}` });
        }
    } catch (error) {
        res.status(500).json({ error: '请求出错，请检查控制台' });
    }
}
